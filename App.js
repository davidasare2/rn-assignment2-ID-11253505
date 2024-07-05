import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const MyComponent = () => {
  return (
    <StyledView className="flex flex-1 items-center justify-center bg-green-500">
      <StyledText className="text-2xl">
        My name is <StyledText className="font-bold">David</StyledText>
      </StyledText>
    </StyledView>
  );
}

export default MyComponent;
