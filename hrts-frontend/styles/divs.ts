import styled from "@emotion/styled";
import tw from "twin.macro";

export const Big = styled.div`
  ${tw`text-5xl`}
`;

export const Body = styled.div`
  ${tw`min-h-screen w-screen`}
  background-color: rgb(18,20,20);
  color: white ;
`;

export const NavBarDiv = styled.header`
  ${tw`shadow-lg sticky z-10 flex justify-between items-center px-5 py-1 mx-auto h-[2.8rem]`}
  background-color: rgb(30,33,34);
`;

export const NavItem = styled.nav`
  ${tw`flex space-x-6`}
`;

export const HalfImageContainer = styled.div`
  ${tw`md:w-[67%] lg:w-[50%]`}
`;

export const ImageContainer = styled.div`
  ${tw`w-full h-full`}
`;
export const CenterFlex = styled.div`
  ${tw`p-3 flex justify-center flex-wrap items-center max-w-6xl mx-auto`}
`;

export const BetweenFlex = styled.div`
  ${tw`flex justify-between items-center my-auto`}
`;
