declare module "customisable-react-native-emoji-selector" {
  import * as React from "react";
  import { StyleProp, ViewStyle, TextStyle } from 'react-native';

  /**
   * Categories
   * The package itself exports a dictionary of objects, however
   * to to enforce usage of the exported dictionary the types
   * just simplifies to an enum. Once compiled it runs the
   * same because the export is named the same.
   */
  export enum Categories {
    all = "all",
    history = "history",
    emotion = "emotion",
    people = "people",
    nature = "nature",
    food = "food",
    activities = "activities",
    places = "places",
    objects = "objects",
    symbols = "symbols",
    flag = "flag"
  }

  export interface EmojiSelectorProps {
    onEmojiSelected(emoji: string): void;
    theme?: string;
    placeholder?: string;
    showTabs?: boolean;
    showSearchBar?: boolean;
    showHistory?: boolean;
    showSectionTitles?: boolean;
    category?: Categories;
    columns?: number;
    shouldInclude?: (e: any) => boolean;

    searchbarStyle?: StyleProp<TextStyle> | undefined;
    searchbarContainerStyle?: StyleProp<ViewStyle> | undefined;
    placeholderTextColor?: string;
    categoryButtonStyle?: StyleProp<ViewStyle> | undefined;
    categoryTextStyle?: StyleProp<TextStyle> | undefined;
  }

  const EmojiSelector: React.ComponentType<EmojiSelectorProps>;

  export default EmojiSelector;
}
