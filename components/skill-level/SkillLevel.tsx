import { Box, Flex } from "@chakra-ui/react";

interface SkillLevelProps {
  maxLevel: number;
  value?: number;
  size?: number;
  onChange?: (value: number) => void;
}

const SkillLevel = ({
  maxLevel,
  size = 5,
  value = 0,
  onChange,
}: SkillLevelProps) => {
  return (
    <Flex>
      {Array.from({ length: maxLevel }, (_, idx) => {
        const level = idx + 1;

        return (
          <Box
            key={level}
            colorScheme="white"
            bg={(level > value && "transparent") || "white"}
            border="2px solid"
            borderColor="white"
            borderRadius="50%"
            w={size}
            h={size}
            mr={level === maxLevel ? 0 : 2}
            onClick={() => onChange && onChange(level)}
          />
        );
      })}
    </Flex>
  );
};

export default SkillLevel;
