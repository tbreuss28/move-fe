import { Flex, Text } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Logo } from "@components";
import { SkillLevel } from "@components";
import { move } from "formik";

interface MoveMarkerProps {
  lat?: number;
  lng?: number;
  title?: string;
  skilllevel?: number;
  onClick?: () => void;
}

const MoveMarker = ({ title, skilllevel, onClick }: MoveMarkerProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      transform="translate(-50%, -100%)"
      color="primary.300"
      _hover={{
        cursor: "pointer",
      }}
    >
      <Flex
        onClick={onClick}
        width="80"
        height="24"
        bgGradient="linear(to-t, primary.400, secondary.200)"
        borderRadius="full"
        overflow="hidden"
        color="white"
        fontSize="sm"
        alignItems="center"
      >
        <Flex
          shrink={0}
          borderRadius="50%"
          height="24"
          width="24"
          background="white"
          color="primary.500"
          alignItems="center"
          justifyContent="center"
          border="8px solid"
          borderColor="brand.300"
        >
          <Logo size="small" />
        </Flex>

        <Flex direction="column" p={2} overflow="hidden">
          <Text
            color="white"
            fontWeight="semibold"
            textOverflow="ellipsis"
            pb="2"
          >
            {title}
          </Text>
          {skilllevel && (
            <SkillLevel size={3} maxLevel={3} value={skilllevel} />
          )}
        </Flex>
      </Flex>
      <TriangleDownIcon fontSize="2xl" />
    </Flex>
  );
};

export const MovePin = ({ onClick }: MoveMarkerProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      transform="translate(-50%, -100%)"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        onClick={onClick}
        width="12"
        height="12"
        bgGradient="linear(to-t, primary.400, secondary.200)"
        borderRadius="50%"
        color="white"
        fontSize="sm"
        p={2}
        overflow="hidden"
      >
        <Logo size="xsmall" />
      </Flex>
      <TriangleDownIcon fontSize="2xl" color="primary.300" />
    </Flex>
  );
};

export default MoveMarker;
