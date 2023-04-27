// ** Theme Default Options ***********************************************************
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS Color Mix - 88 Above
user_pref("layout.css.color-mix.enabled", true);

// CSS Blur Filter - 88 Above
user_pref("layout.css.backdrop-filter.enabled", true);

// :has() - https://developer.mozilla.org/en-US/docs/Web/CSS/:has
user_pref("layout.css.has-selector.enabled", true);

// CSS Container Queries - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries
user_pref("layout.css.container-queries.enabled", true);

// To let `page.proton_color.system_accent` work
user_pref("widget.non-native-theme.use-theme-accent", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);

// ** Theme Custom Options ************************************************************
user_pref("userChrome+Content.additions.about_addons_show_management_buttons", false);
user_pref("userChrome+Content.additions.about_addons_show_version_number", true);
user_pref("userChrome+Content.additions.about_config_compact", true);
user_pref("userChrome+Content.additions.about_page_scrollbars", true);
user_pref("userChrome+Content.additions.enable_selection", false);          // enable selection and copying on every website
user_pref("userChrome+Content.additions.floating_findbar_on_top", true);
user_pref("userChrome+Content.additions.standalone_image_page_mods", true);
user_pref("userChrome+Content.additions.uBlock_Origin.hide_default_unused", true);
user_pref("userChrome+Content.additions.uBlock_Origin.show_shortcuts", false);
user_pref("userChrome+Content.autohide.bookmarkbar", false);
user_pref("userChrome+Content.autohide.forward_button", false);
user_pref("userChrome+Content.autohide.menubar", true);
user_pref("userChrome+Content.bookmarkbar.multi_row", false);
user_pref("userChrome+Content.compatibility.os.linux_non_native_titlebar_button", false);
user_pref("userChrome+Content.compatibility.os.win11", false);
user_pref("userChrome+Content.counter.bookmark_menu", false);
user_pref("userChrome+Content.counter.tab", false);
user_pref("userChrome+Content.decoration.animate", true);
user_pref("userChrome+Content.fullscreen.overlap", true);
user_pref("userChrome+Content.fullscreen.show_bookmarkbar", true);
user_pref("userChrome+Content.icons.change_toolbarbuttons_and_overflowbutton_position", true);
user_pref("userChrome+Content.newTab.image", false);
user_pref("userChrome+Content.newTab.image.Augustinus_kerk", false);
user_pref("userChrome+Content.newTab.image.Augustinus_wijsheid", false);
user_pref("userChrome+Content.newTab.image.Edge", true);
user_pref("userChrome+Content.padding.bookmark_menu.compact", false);
user_pref("userChrome+Content.padding.drag_space", true);
user_pref("userChrome+Content.padding.first_tab", true);
user_pref("userChrome+Content.padding.megabar_style", true);
user_pref("userChrome+Content.padding.menu_compact", false);
user_pref("userChrome+Content.page.field_border", false);
user_pref("userChrome+Content.page.focus_outline_hidden", true);
user_pref("userChrome+Content.page.proton_color.dark_blue_accent", false);
user_pref("userChrome+Content.page.proton_color.system_accent", true);
user_pref("userChrome+Content.player", true);
user_pref("userChrome+Content.rounding.square_button", false);
user_pref("userChrome+Content.rounding.square_checklabel", false);
user_pref("userChrome+Content.rounding.square_dialog", false);
user_pref("userChrome+Content.rounding.square_field", false);
user_pref("userChrome+Content.rounding.square_menuitem", false);
user_pref("userChrome+Content.rounding.square_menupopup", false);
user_pref("userChrome+Content.rounding.square_panel", false);
user_pref("userChrome+Content.rounding.square_panelitem", false);
user_pref("userChrome+Content.rounding.square_tab", false);
user_pref("userChrome+Content.rounding.square_toolbar", false);
user_pref("userChrome+Content.tab.bottom_rounded_corner.chrome", false);
user_pref("userChrome+Content.tab.bottom_rounded_corner.edge", true);
user_pref("userChrome+Content.tab.bottom_rounded_corner.wave", false);
user_pref("userChrome+Content.tab.close_button_at_hover_pinned", true);
user_pref("userChrome+Content.tab.close_button_at_hover_pinned.background", true);
user_pref("userChrome+Content.tab.show_(un)muted_icon_pinned", false);
user_pref("userChrome+Content.tab.show_sound_label", false);
user_pref("userChrome+Content.tab.unscroll", false);
user_pref("userChrome+Content.tab.vertical_tab", false);
user_pref("userChrome+Content.theme.built_in_color", false);
user_pref("userChrome+Content.theme.coole_breeze", false);
user_pref("userChrome+Content.theme.non_native_menu", false);
user_pref("userChrome+Content.theme.private_mode", true);
user_pref("userChrome+Content.tor.compatibility", false);
user_pref("userChrome+Content.urlview.always_show_page_actions", false);
user_pref("userChrome+Content.urlview.permissions.hide_granted-icon", true);
user_pref("userChrome+Content.zavety", false);

// ** Useful Options ******************************************************************
// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Integrated unit convertor at urlbar
user_pref("browser.urlbar.unitConversion.enabled", true);
