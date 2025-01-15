import { TouchableOpacity, Text, View } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  hadlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={hadlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} $
      {isLoading ? "opacity-50" : ''} disnable={isLoading}`}
    >
      <Text className="text-primary font-psemibold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
