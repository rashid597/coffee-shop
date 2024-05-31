import { Card, CardContent, CardHeader } from "../../components/Shadcn/Card";
import NotFound from "../../assets/404.png";
import { Button } from "../../components/Shadcn/Button";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <Card className="w-[500px]">
          <CardHeader className="text-center">I think you're lost</CardHeader>
          <CardContent>
            <img src={NotFound} alt="404 Not Found" />
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
