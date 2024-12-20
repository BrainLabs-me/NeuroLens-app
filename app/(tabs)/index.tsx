import React, { useRef, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
import {
  Scene,
  PerspectiveCamera,
  PlaneGeometry,
  ShaderMaterial,
  Mesh,
  TextureLoader,
  WebGLRenderTarget,
  OrthographicCamera,
} from "three";

export default function App() {
  const onContextCreate = async (gl) => {
    // Kreiraj renderer
    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    // Kamere
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1); // Ortho kamera za fullscreen quad

    // Scene
    const imageScene = new Scene();
    const blurScene = new Scene();

    // Učitaj pozadinsku sliku kao teksturu
    const textureLoader = new TextureLoader();
    const backgroundTexture = await textureLoader.loadAsync(
      require("@/assets/images/bg-3.png")
    );

    // Framebuffer za off-screen renderovanje
    const renderTarget = new WebGLRenderTarget(
      gl.drawingBufferWidth,
      gl.drawingBufferHeight
    );

    // 1. Prikazivanje slike na sceni
    const imageMaterial = new ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        varying vec2 vUv;
        void main() {
          gl_FragColor = texture2D(uTexture, vUv);
        }
      `,
      uniforms: {
        uTexture: { value: backgroundTexture },
      },
    });
    const quadGeometry = new PlaneGeometry(2, 2);
    const imageQuad = new Mesh(quadGeometry, imageMaterial);
    imageScene.add(imageQuad);

    // 2. Blur shader scena
    const blurMaterial = new ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec2 uResolution;
        uniform float uBlurDirection;

        varying vec2 vUv;

        void main() {
          vec2 texelSize = 1.0 / uResolution;
          vec3 color = vec3(0.0);

          float weights[5];
          weights[0] = 0.227027;
          weights[1] = 0.194594;
          weights[2] = 0.121621;
          weights[3] = 0.054054;
          weights[4] = 0.016216;

          for (int i = -4; i <= 4; i++) {
            float weight = weights[abs(i)];
            vec2 offset = texelSize * vec2(
              uBlurDirection * float(i),
              (1.0 - uBlurDirection) * float(i)
            );
            color += texture2D(uTexture, vUv + offset).rgb * weight;
          }

          gl_FragColor = vec4(color, 1.0);
        }
      `,
      uniforms: {
        uTexture: { value: renderTarget.texture },
        uResolution: { value: [gl.drawingBufferWidth, gl.drawingBufferHeight] },
        uBlurDirection: { value: 1.0 },
      },
    });

    const blurQuad = new Mesh(quadGeometry, blurMaterial);
    blurScene.add(blurQuad);

    // Render funkcija
    const render = () => {
      // 1. Renderuj početni sadržaj u renderTarget
      renderer.setRenderTarget(renderTarget);
      renderer.render(imageScene, camera);

      // 2. Renderuj blur shader koristeći renderTarget teksturu
      renderer.setRenderTarget(null);
      renderer.render(blurScene, camera);

      gl.endFrameEXP();
      requestAnimationFrame(render);
    };

    render();
  };

  return (
    <>
      <Image
        source={require("@/assets/images/bg-2.png")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
        }}
      ></Image>
      <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />
    </>
  );
}
