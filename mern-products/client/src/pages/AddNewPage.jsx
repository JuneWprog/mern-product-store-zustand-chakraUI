import React from 'react'
import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import useStore from '../store/product';

const AddNewPage = () => {
  const {createProduct } = useStore();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();

  const handleAddProduct = async () => {
   
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
		setNewProduct({ name: "", price: "", image: "" });
	};


  return (
    <Container maxW={"container.sm"}>
			<VStack spacing={8}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
					Create New Product
				</Heading>

				<Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
					<VStack spacing={4}>
						<Input placeholder='Name' value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
            <Input placeholder='Price' value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
            <Input placeholder='Image Url' value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
          </VStack>
          <Button colorScheme={"blue"} w="full" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Box>
      </VStack>
    </Container>
  )
}

export default AddNewPage
