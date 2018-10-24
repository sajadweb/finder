import color from "color";
import { Platform, Dimensions, PixelRatio } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = "material";
interface BaseTheme {
    primaryLight: String;
    primary: String;
    primaryDark: String;
    success: String;
    info: String;
    warning: String;
    danger: String;
    darkLight: String;
    dark: String;
    white: String;
    disabled: String;
    disabledLight: String;
    border: String;
    float: string; // Can be "right" | "left"
}
export default (theme: BaseTheme) => {
    return {
        platformStyle,
        platform,
        // AndroidRipple
        androidRipple: true,
        androidRippleColor: "rgba(256, 256, 256, 0.3)",
        androidRippleColorDark: "rgba(0, 0, 0, 0.15)",
        // Card
        cardDefaultBg: `${theme.white}`,

        // Color
        brandPrimary: `${theme.primary}`,
        brandInfo: `${theme.info}`,
        brandSuccess: `${theme.success}`,
        brandDanger: `${theme.danger}`,
        brandWarning: `${theme.warning}`,
        brandSidebar: `${theme.primaryDark}`,

        // Font
        fontFamily: "Roboto",
        fontSizeBase: 15,

        // Badge
        badgeBg: `${theme.danger}`,
        badgeColor: `${theme.white}`,
        // New Variable
        badgePadding: platform === "ios" ? 3 : 0,

        // Button
        btnFontFamily: platform === "ios" ? "Roboto" : "Roboto_medium",
        btnDisabledBg: `${theme.disabled}`,
        btnDisabledClr: `${theme.disabledLight}`,

        // CheckBox
        CheckboxRadius: 0,
        CheckboxBorderWidth: 2,
        CheckboxPaddingLeft: 2,
        CheckboxPaddingBottom: platform === "ios" ? 0 : 5,
        CheckboxIconSize: platform === "ios" ? 18 : 14,
        CheckboxIconMarginTop: platform === "ios" ? undefined : 1,
        CheckboxFontSize: platform === "ios" ? 21 : 18,
        DefaultFontSize: 17,
        checkboxBgColor: `${theme.disabledLight}`,
        checkboxSize: 20,
        checkboxTickColor: `${theme.white}`,

        // Segment
        segmentBackgroundColor: `${theme.primary}`,
        segmentActiveBackgroundColor: `${theme.white}`,
        segmentTextColor: `${theme.white}`,
        segmentActiveTextColor: `${theme.primary}`,
        segmentBorderColor: `${theme.white}`,
        segmentBorderColorMain: `${theme.primary}`,

        // New Variable
        get defaultTextColor() {
            return this.textColor;
        },

        get btnPrimaryBg() {
            return this.brandPrimary;
        },
        get btnPrimaryColor() {
            return this.inverseTextColor;
        },
        get btnInfoBg() {
            return this.brandInfo;
        },
        get btnInfoColor() {
            return this.inverseTextColor;
        },
        get btnSuccessBg() {
            return this.brandSuccess;
        },
        get btnSuccessColor() {
            return this.inverseTextColor;
        },
        get btnDangerBg() {
            return this.brandDanger;
        },
        get btnDangerColor() {
            return this.inverseTextColor;
        },
        get btnWarningBg() {
            return this.brandWarning;
        },
        get btnWarningColor() {
            return this.inverseTextColor;
        },
        get btnTextSize() {
            return platform === "ios" ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
        },
        get btnTextSizeLarge() {
            return this.fontSizeBase * 1.5;
        },
        get btnTextSizeSmall() {
            return this.fontSizeBase * 0.8;
        },
        get borderRadiusLarge() {
            return this.fontSizeBase * 3.8;
        },

        buttonPadding: 6,

        get iconSizeLarge() {
            return this.iconFontSize * 1.5;
        },
        get iconSizeSmall() {
            return this.iconFontSize * 0.6;
        },

        get fontSizeH1() {
            return this.fontSizeBase * 1.8;
        },
        get fontSizeH2() {
            return this.fontSizeBase * 1.6;
        },
        get fontSizeH3() {
            return this.fontSizeBase * 1.4;
        },

        // Footer
        footerHeight: 55,
        footerDefaultBg: `${theme.primary}`,

        // FooterTab
        tabBarTextColor: `${theme.primaryLight}`,
        tabBarTextSize: platform === "ios" ? 14 : 11,
        activeTab: `${theme.white}`,
        sTabBarActiveTextColor: `${theme.primary}`,
        tabBarActiveTextColor: `${theme.white}`,
        tabActiveBgColor: undefined,

        // Tab
        tabDefaultBg: `${theme.primaryDark}`,
        topTabBarTextColor: `${theme.primaryLight}`,
        topTabBarActiveTextColor: `${theme.white}`,
        topTabActiveBgColor: undefined,
        topTabBarBorderColor: `${theme.white}`,
        topTabBarActiveBorderColor: `${theme.white}`,

        // Header
        toolbarBtnColor: `${theme.white}`,
        toolbarDefaultBg: `${theme.primary}`,
        toolbarHeight: platform === "ios" ? 76 : 56,
        toolbarIconSize: platform === "ios" ? 20 : 22,
        toolbarSearchIconSize: platform === "ios" ? 20 : 23,
        toolbarInputColor: `${theme.white}`,
        searchBarHeight: platform === "ios" ? 30 : 40,
        toolbarInverseBg: `${theme.darkLight}`,
        toolbarTextColor: `${theme.white}`,
        toolbarDefaultBorder: `${theme.primary}`,
        iosStatusbar: "light-content",
        get statusBarColor() {
            return color(this.toolbarDefaultBg)
                .darken(0.2)
                .hex();
        },

        // Icon
        iconFamily: "Ionicons",
        iconFontSize: platform === "ios" ? 30 : 28,
        iconMargin: 7,
        iconHeaderSize: platform === "ios" ? 29 : 24,

        // InputGroup
        inputFontSize: 17,
        inputBorderColor: `${theme.border}`,
        inputSuccessBorderColor: `${theme.success}`,
        inputErrorBorderColor: `${theme.danger}`,

        get inputColor() {
            return this.textColor;
        },
        get inputColorPlaceholder() {
            return `${theme.darkLight}`;
        },

        inputGroupMarginBottom: 10,
        inputHeightBase: 50,
        inputPaddingLeft: 5,

        get inputPaddingLeftIcon() {
            return this.inputPaddingLeft * 8;
        },

        // Line Height
        btnLineHeight: 19,
        lineHeightH1: 32,
        lineHeightH2: 27,
        lineHeightH3: 22,
        iconLineHeight: platform === "ios" ? 37 : 30,
        lineHeight: platform === "ios" ? 20 : 24,

        // List
        listBorderColor: "#c9c9c9",
        listDividerBg: "#f4f4f4",
        listItemHeight: 45,
        listBtnUnderlayColor: "#DDD",

        // Card
        cardBorderColor: "#ccc",

        // Changed Variable
        listItemPadding: platform === "ios" ? 10 : 12,

        listNoteColor: "#808080",
        listNoteSize: 13,

        // Progress Bar
        defaultProgressColor: `${theme.danger}`,
        inverseProgressColor: `${theme.dark}`,

        // Radio Button
        radioBtnSize: platform === "ios" ? 25 : 23,
        radioSelectedColorAndroid: `${theme.primary}`,

        // New Variable
        radioBtnLineHeight: platform === "ios" ? 29 : 24,

        radioColor: "#7e7e7e",

        get radioSelectedColor() {
            return color(this.radioColor)
                .darken(0.2)
                .hex();
        },

        // Spinner
        defaultSpinnerColor: `${theme.primary}`,
        inverseSpinnerColor: `${theme.dark}`,

        // Tabs
        tabBgColor: "#F8F8F8",
        tabFontSize: 15,
        tabTextColor: "#222222",

        // Text
        textColor: `${theme.dark}`,
        inverseTextColor: `${theme.white}`,
        noteFontSize: 14,

        // Title
        titleFontfamily: platform === "ios" ? "Roboto" : "Roboto_medium",
        titleFontSize: 19,
        subTitleFontSize: 14,
        subtitleColor: `${theme.white}`,

        // New Variable
        titleFontColor: `${theme.white}`,

        // Other
        borderRadiusBase: 2,
        borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        contentPadding: 10,

        get darkenHeader() {
            return color(this.tabBgColor)
                .darken(0.03)
                .hex();
        },

        dropdownBg: `${theme.dark}`,
        dropdownLinkColor: `${theme.darkLight}`,
        inputLineHeight: 24,
        jumbotronBg: "#C9C9CE",
        jumbotronPadding: 30,
        deviceWidth,
        deviceHeight,

        // New Variable
        inputGroupRoundedBorderRadius: 30,
        float: `${theme.float}`,
    };
};
