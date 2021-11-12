import { Flex } from "@chakra-ui/layout";
import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>solslabs</title>
        <meta name="description" content="your nft - a new dimension" />
        {/* TODO replace with slab favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex h="100%" bg="blue">
        Hi there everyone
      </Flex>
    </div>
  );
};

export default Index;
