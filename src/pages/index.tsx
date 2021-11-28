import { Button } from "@chakra-ui/button";
import { Flex, Link, Text } from "@chakra-ui/layout";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { SlabPreview } from "../components/SlabPreview";

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
      <SlabPreview top={"132px"} left={"120px"} image={"/images/trippy.gif"} />

      <Tagline />
    </div>
  );
};

export default Index;
