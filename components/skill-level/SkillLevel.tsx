import { Box, Flex } from "@chakra-ui/react";

interface SkillLevelProps {
  maxLevel: number;
  value?: number;
  onChange?: (value: number) => void;
}

const SkillLevel = ({ maxLevel, value = 0, onChange }: SkillLevelProps) => {
  return (
    <Flex>
      {Array.from({ length: maxLevel }, (_, idx) => {
        const level = idx + 1;

        return (
          <Box
            key={level}
            bg={(level <= value && "light") || undefined}
            border="2px solid"
            borderColor="light"
            borderRadius="50%"
            w={5}
            h={5}
            mr={level === maxLevel ? 0 : 2}
            onClick={() => onChange && onChange(level)}
          />
        );
      })}
    </Flex>
  );
};

export default SkillLevel;
