import { Button } from "@chakra-ui/button";
import { Img } from "@chakra-ui/image";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

const Tagline = () => {
  return (
    <Flex d="vertical" pos="absolute" right="0" bottom="0" p={6}>
      <Text fontSize="6xl" lineHeight={1}>
        your nft
        <br />
        a new
        <br />
        <Text fontFamily="mono">dimension</Text>
      </Text>
      <Text mt={2}>
        verify your ownership and
        <br />
        create physical prints of the
        <br />
        nfts in your wallet
      </Text>
      <Link href="/nfts">
        <Button w="sm" bg="button" my={10}>
          lfg wgmi
        </Button>
      </Link>
    </Flex>
  );
};

const Slab = () => {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const mid = "#b9bbbb";
  const dark = "#737575";
  const light = "#c5c7c6";
  return (
    <Box
      style={{ rotate: "-11deg" }}
      bgImage="url('/images/slab.png')"
      height={500}
      width={350}
    >
      {/* <Button onClick={() => setLeft(left + 1)}>Left {left}</Button> */}
      <Button onClick={() => setTop(top + 1)}>Top {top}</Button>
      {/* <Img src="/images/slab.png" position="absolute" /> */}

      {/* <Box
        height={212}
        width={212}
        background="pink"
        position="absolute"
        // left={left}
        // top={top}
        left={74}
        top={234}
      /> */}

      <Box
        width={210}
        height={84}
        position="absolute"
        left={74}
        top={8}
        // background="silver"
        bgGradient={[
          `linear(to-r, ${mid} 0%, ${dark} 88%, ${light})`,
          // "linear(to-t, blue.200, teal.500)",
          // "linear(to-b, orange.100, purple.300)",
        ]}
      />

      <Img
        src="/images/trippy.gif"
        position="absolute"
        height={212}
        width={212}
        left={74}
        top={234}
        borderRadius={12}
      />
    </Box>
  );
};

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>solslabs</title>
        <meta name="description" content="your nft - a new dimension" />
        {/* TODO replace with slab favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        background="red"
        pos="absolute"
        h={"80%"}
        w={"80%"}
        left={0}
        bottom={0}
        p={32}
      >
        <Slab />
        {/* <Img
          src="/images/plane.png"
          position="absolute"
          width={2600}
          height={1584}
          left={-304}
          top={-45}
        /> */}
      </Box>

      <Tagline />
    </div>
  );
};

export default Index;
