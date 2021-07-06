import { Text, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionProps {
  label: string;
  children: ReactNode;
}

const SkillLevel = ({ label, children }: SectionProps) => {
  return (
    <Flex my="12" direction="column" borderRadius="lg" overflow="hidden">
      <Text fontSize="xs" mb="2" color="white">
        {label}
      </Text>
      {children}
    </Flex>
  );
};

export default SkillLevel;
