import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
        <Medal className="h-6 w-6 mr-2" />
        No 1 task management
      </div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-5 lg:flex lg:items-center">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand User Flow.
              <strong className="font-extrabold text-red-700 sm:block">
                {" "}
                Increase Conversion.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Revolutionize project management with our intuitive app.
              Collaborate effortlessly, organize tasks seamlessly, and achieve
              your goals with ease. Discover a new era of productivity today!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={"/sign-in"}>
                <Button variant={"default"} className="bg-red-600" size={"lg"}>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
