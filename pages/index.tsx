import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box m="10" border={"4px solid red"} p={4}>
      <Link href="/moves">
        <a>Moves</a>
      </Link>
    </Box>
  );
}
