import * as React from "react"
import { Text, View, Pressable } from "react-native"
import { useFonts } from 'expo-font'
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue'
import i18n from 'i18n-js'

export function CustomText (props: any) {

  const content = (
    <View style={props.containerStyle}>
      <Text
        {...props}
        AccessibilityRole="text"
        allowFontScaling={false}
        style={[{
          fontFamily:'BebasNeue_400Regular',
          color: props.color,
          fontSize: props.size },
          props.style]}
        >
          {props.text ? props.text : i18n.t(props.langText)}
      </Text>
    </View>
  )

  const touched = (
    <Pressable {...props}>
      {content}
    </Pressable>
  )

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return props.pressable ? touched : content
  }
};

CustomText.defaultProps = {
  langText: 'test.i18nTest',
  text: '',
};
