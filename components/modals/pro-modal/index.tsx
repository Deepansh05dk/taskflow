"use client";

import { stripeRedirect } from "@/actions/stripe-redirect";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAction } from "@/hooks/use-action";
import useProModal from "@/hooks/use-pro-modal";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

const ProModal = () => {
  const { onClose, isOpen } = useProModal();
  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onUpgradde = () => {
    execute({});
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        <div className="aspect-video relative flex items-center justify-center">
          <Image
            src={"/proBanner.jpg"}
            alt="Hero"
            className="object-cover"
            fill
          />
        </div>
        <div className="text-neutral-700 mx-auto space-y-6 p-6">
          <h2 className="font-semibold text-xl">
            Upgrade to TaskFlow Pro Today!
          </h2>
          <p className="text-xs font-semibold text-neutral-600">
            Explore the best of TaskFlow
          </p>
          <div className="pl-3">
            <ul className="text-sm list-none">
              <li>
                <span className="rounded-full bg-[#0369a1] p-1 text-center mr-2 text-white">
                  1{" "}
                </span>{" "}
                Unlimited Boards
              </li>
              <li className="my-2">
                {" "}
                <span className="rounded-full bg-[#0369a1] p-1 text-center mr-2  text-white">
                  2{" "}
                </span>
                Advanced Checklists
              </li>
              <li className="my-2">
                <span className="rounded-full bg-[#0369a1] p-1 text-center mr-2  text-white">
                  3{" "}
                </span>
                Admin and security features
              </li>
              <li>
                <span className="rounded-full bg-[#0369a1] p-1 text-center mr-2  text-white">
                  4{" "}
                </span>
                And more!
              </li>
            </ul>
          </div>
          <Button
            onClick={onUpgradde}
            disabled={isLoading}
            className="w-full"
            variant="primary"
          >
            Upgrade
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
