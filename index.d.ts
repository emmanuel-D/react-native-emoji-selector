import * as React from "react";
import {StyleProp, ViewStyle, TextStyle} from 'react-native';

export as namespace EmojiSelector;

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
    searchbarStyle?: StyleProp<TextStyle>;
    searchbarContainerStyle?: StyleProp<ViewStyle>;
    placeholderTextColor?: string;
    categoryButtonStyle?: StyleProp<ViewStyle>;
    categoryTextStyle?: StyleProp<TextStyle>;
}

declare const EmojiSelector: React.ComponentType<EmojiSelectorProps>;

export default EmojiSelector;
