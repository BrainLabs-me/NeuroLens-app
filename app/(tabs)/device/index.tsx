import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { Surface } from "gl-react-expo";
import { Node, Shaders, GLSL } from "gl-react";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Pozadinska slika */}
      <ImageBackground
        source={{ uri: "https://source.unsplash.com/random" }}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      >
        {/* Površina za shader */}
        <Surface style={StyleSheet.absoluteFillObject}>
          <Blur intensity={5.0}>
            <ImageBackground
              source={{ uri: "https://source.unsplash.com/random" }}
              style={StyleSheet.absoluteFillObject}
              resizeMode="cover"
            />
          </Blur>
        </Surface>

        {/* Tekst ispred zamagljene pozadine */}
        <View style={styles.content}>
          <Text style={styles.text}>Ovo je tekst ispred blura!</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

// Definišemo shader
const shaders = Shaders.create({
  blur: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      uniform float intensity;

      void main() {
        vec4 color = vec4(0.0);
        float total = 0.0;

        // Definišemo veličinu blur-a
        float offset = 1.0 / 100.0;

        // Petlja za uzorkovanje piksela oko trenutne pozicije
        for (float x = -4.0; x <= 4.0; x++) {
          for (float y = -4.0; y <= 4.0; y++) {
            float weight = exp(-(x*x + y*y) / 8.0);
            color += texture2D(t, uv + vec2(x * offset, y * offset)) * weight;
            total += weight;
          }
        }
        gl_FragColor = color / total;
      }
    `,
  },
});

const Blur = ({ children, intensity = 1.0 }) => (
  <Node shader={shaders.blur} uniforms={{ t: children, intensity }} />
);
