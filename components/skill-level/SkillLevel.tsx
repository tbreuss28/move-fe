import { Box, Flex } from "@chakra-ui/react";

interface SkillLevelProps {
  maxLevel: number;
  value: number;
  onChange?: (value: number) => void;
}

const SkillLevel = ({ maxLevel, value }: SkillLevelProps) => {
  return (
    <Flex>
      {Array.from({ length: maxLevel }, (_, idx) => (
        <Box
          key={idx}
          bg={(idx < value && "light") || undefined}
          border="2px solid"
          borderColor="light"
          borderRadius="50%"
          w={5}
          h={5}
          mr={idx === maxLevel - 1 ? 0 : 1}
        />
      ))}
    </Flex>
  );
};

export default SkillLevel;
