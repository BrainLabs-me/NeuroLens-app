import { ArrowLeft } from "iconsax-react-native";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";

import { Image } from "expo-image";
import { Image as RnImage } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";

import { router } from "expo-router";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { t, i18n } = useTranslation();

  // State for toggling language
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "me" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <View style={styles.background}></View>
      <View style={styles.bannerContainer}>
        <Image
          contentPosition={"bottom"}
          contentFit="cover"
          source={require("@/assets/images/profile_banner-2.png")}
          style={styles.banner}
        ></Image>
        <LinearGradient
          colors={["transparent", "transparent", "#00000F", "#00000F"]}
          style={styles.gradient}
        />
      </View>
      <RnImage
        style={styles.bgImage}
        source={require("@/assets/images/bg-3.png")}
      ></RnImage>
      <Image
        contentFit="contain"
        source={require("@/assets/images/logo_horizontal.png")}
        style={styles.logo}
      ></Image>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <ArrowLeft color="white" size={28}></ArrowLeft>
      </TouchableOpacity>

      {/* Button to toggle language */}
      <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
        <Text style={styles.languageButtonText}>
          {language === "en" ? "Switch to Montenegrin" : "Switch to English"}
        </Text>
      </TouchableOpacity>

      {/* ScrollView for Privacy Policy */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>{t("privacy-policy.title")}</Text>
        <Text style={styles.sectionHeader}>
          {t("privacy-policy.effective-date.title")}
        </Text>
        <Text style={styles.paragraph}>
          {t("privacy-policy.effective-date.text")}
        </Text>
        <Text style={styles.sectionHeader}>
          {t("privacy-policy.info-we-collect.title")}
        </Text>
        <Text style={styles.paragraph}>
          {t("privacy-policy.info-we-collect.text")}
        </Text>
        <Text style={styles.sectionHeader}>
          {t("privacy-policy.how-we-use.title")}
        </Text>
        <Text style={styles.paragraph}>
          {t("privacy-policy.how-we-use.text")}
        </Text>
        <Text style={styles.sectionHeader}>
          {t("privacy-policy.third-party.title")}
        </Text>
        <Text style={styles.paragraph}>
          {t("privacy-policy.third-party.text")}
        </Text>
        <Text style={styles.sectionHeader}>
          {t("privacy-policy.contact-us.title")}
        </Text>
        <Text style={styles.paragraph}>
          {t("privacy-policy.contact-us.text")}
        </Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#00000F",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  bannerContainer: {
    overflow: "hidden",
    height: 200,
  },
  banner: {
    width: "100%",
    height: 230,
    position: "absolute",
  },
  gradient: {
    width: "100%",
    height: 300,
  },
  bgImage: {
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  logo: {
    width: 170,
    height: 50,
    position: "absolute",
    top: 60,
    left: 30,
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 60,
    right: 30,
  },
  languageButton: {
    position: "absolute",
    top: 120,
    right: 30,
    backgroundColor: "#ffffff20",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  languageButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  contentContainer: {
    padding: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "white",
    lineHeight: 24,
  },
});
