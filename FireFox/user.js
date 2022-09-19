// ** Theme Default Options ***********************************************************
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Proton Tooltip
user_pref("browser.proton.places-tooltip.enabled", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS Color Mix - 88 Above
user_pref("layout.css.color-mix.enabled", true);

// CSS Blur Filter - 88 Above
user_pref("layout.css.backdrop-filter.enabled", true);

// To let `page.proton_color.system_accent` work
user_pref("widget.non-native-theme.use-theme-accent	true", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);

// ** Theme Custom Options ************************************************************
user_pref("userChrome+Content.additions.enable_selection", false);          // enable selection and copying on every website
user_pref("userChrome+Content.additions.private_mode", true);
user_pref("userChrome+Content.additions.uBlock_Origin.hide_default_unused", true);
user_pref("userChrome+Content.additions.uBlock_Origin.show_shortcuts", false);
user_pref("userChrome+Content.autohide.forward_button", false);
user_pref("userChrome+Content.compatibility.accent_color", true);
user_pref("userChrome+Content.padding.bookmark_menu.compact", false);
user_pref("userChrome+Content.padding.drag_space", true);
user_pref("userChrome+Content.padding.first_tab", true);
user_pref("userChrome+Content.padding.megabar_style", true);
user_pref("userChrome+Content.padding.menu_compact", false);
user_pref("userChrome+Content.page.field_border", false);
user_pref("userChrome+Content.page.proton_color.system_accent", true);
user_pref("userChrome+Content.player", true);
user_pref("userChrome+Content.rounding.square", false);
user_pref("userChrome+Content.tab.close_button_at_hover_pinned", true);
user_pref("userChrome+Content.tab.close_button_at_hover_pinned.always", true);
user_pref("userChrome+Content.tab.show_(un)muted_icon_pinned", false);
user_pref("userChrome+Content.tab.show_sound_label", false);
user_pref("userChrome+Content.tab.vertical_tab", false);
user_pref("userChrome+Content.urlview.permissions.hide_granded-icon", false);
user_pref("userChrome+Content.zavety", false);

// ** Useful Options ******************************************************************
// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Integrated unit convertor at urlbar
user_pref("browser.urlbar.unitConversion.enabled", true);
