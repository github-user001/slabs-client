import { Button } from "@chakra-ui/button";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

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
        {/* <Img
          src="/images/plane.png"
          position="absolute"
          width={2600}
          height={1584}
          left={-304}
          top={-45}
        /> */}
        <Img
          style={{ rotate: "-11deg" }}
          src="/images/slab.png"
          position="absolute"
        />

        <Img
          style={{ rotate: "-11deg" }}
          src="/images/trippy.gif"
          position="absolute"
          height={220}
          width={220}
          left={214}
          top={360}
          borderRadius={12}
          // right={1}
        />
      </Box>

      <Tagline />
    </div>
  );
};

export default Index;
