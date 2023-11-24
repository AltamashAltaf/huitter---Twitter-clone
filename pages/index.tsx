import Form from "@/components/Form";
import Header from "@/components/Header";
import Postfeed from "@/components/posts/PostFeed";

export default function Home() {
  return (
    <>
    <Header label="Home"/>
    <Form placeholder ="What's happening?" />
    <Postfeed />
    
    </>
  )
}