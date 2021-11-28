import { Button } from "@chakra-ui/button";
import { Flex, Link, Text, VStack } from "@chakra-ui/layout";
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

      <VStack>
        {/* 
        
        Reounded rectangle in vertial list
        my orders
        one color if they've been doxxed (green / blue)
        // order init date
        nft images that are in order

        [ onclick ]
          take them to shopify to dox themselves
          show preview of card
          if not doxxed, button underneath that says "Enter shipping info"
          if already doxxed, provide similar button to view the status of their order
            - probably display inline but hack to kick them off

        
        */}
        <Link href="/orders">
          <Button w="sm" bg="button" my={10}>
            View my orders
          </Button>
        </Link>

        <Link href="/nfts">
          <Button w="sm" bg="button" my={10}>
            New order
          </Button>
        </Link>
      </VStack>
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
