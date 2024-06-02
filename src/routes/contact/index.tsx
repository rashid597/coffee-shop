import { Card, CardContent, CardHeader } from "../../components/Shadcn/Card";

export const Contact = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <Card className="w-[500px] h-fit">
          <CardHeader>Contact Us</CardHeader>
          <CardContent>
            Need to get in touch? We're here to help. You can reach us by
            sending an email to{" "}
            <span className="text-amber-800">contact@starcoffeeshop.com</span>.
            We look forward to hearing from you and addressing any questions or
            concerns you may have.
          </CardContent>
        </Card>
      </div>
    </>
  );
};
