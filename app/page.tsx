"use client";
import { Tab } from "@headlessui/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/dialog";
import { useFormik } from "formik";
import TextInputModal from "./components/modals/TextInputModal";
import TextInputPreview from "./components/previews/TextInputPreview";
import NumberInputModal from "./components/modals/NumberInputModal";
import NumberInputPreview from "./components/previews/NumberInputPreview";
import { useState } from "react";

const tabs = [
  {
    name: "Text Input",
    modal: TextInputModal,
  },
  {
    name: "Number Input",
    modal: NumberInputModal,
  },
  // {
  //   name: "Select Input",
  //   modal: <SelectInputModal />,
  // },
  // {
  //   name: "Radio Input",
  //   modal: <RadioInputModal />,
  // },
  // {
  //   name: "Checkbox Input",
  //   modal: <CheckboxInputModal />,
  // },
  // {
  //   name: "Textarea Input",
  //   modal: <TextareaInputModal />,
  // }
];

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const formik = useFormik({
    initialValues: {
      textLabel: "",
      textPlaceholder: "",
      numberLabel: "",
      numberPlaceholder: "",
      minNumber: 0,
      maxNumber: 1,
    },
    onSubmit: (values: any) => console.log(values),
  });
  const formikNumber = useFormik({
    initialValues: {
      numberLabel: "",
      numberPlaceholder: "",
      minNumber: 0,
      maxNumber: 1,
    },
    onSubmit: (values: any) => console.log(values),
  });

  const [activeModal, setActiveModal] = useState<any>(null);

  return (
    <main className="flex min-h-screen items-center justify-center px-36 py-24">
      <section className="w-full h-full text-white bg-[#121212] px-12 py-8 flex flex-col border border-[#121212] rounded-2xl">
        <div className="flex flex-col px-6 py-8">
          <h1 className="w-full pb-1 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-2xl sm:text-3xl">
            Form oluştur
          </h1>
          <p className="text-sm text-gray-400">Sayfa hakkında bilgi</p>
        </div>
        <div className="grid grid-cols-3 px-6 py-8 space-x-8">
          <Tab.Group>
            <Dialog>
              <aside className="col col-span-1 space-y-2">
                <h3 className="w-full pb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-xl sm:text-2xl">
                  Inputs
                </h3>

                <Tab.List className="flex w-full">
                  <div className="flex flex-col w-full">
                    {tabs.map((tab, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer space-y-3"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <DialogTrigger className="w-full">
                          <Tab
                            className={({ selected }) =>
                              cn(
                                "relative w-full px-2 py-4 ring-1 bg-[#121212] ring-gray-900/5 rounded-lg leading-none flex items-top justify-start",
                                selected
                                  ? "bg-gradient-to-r from-red-600 to-violet-600 text-white"
                                  : "bg-[#121212] text-[#bbb]"
                              )
                            }
                            onClick={() => setActiveModal(tab.name)}
                          >
                            <div className="space-y-2">
                              <p className="">{tab.name}</p>
                            </div>
                          </Tab>
                        </DialogTrigger>
                        <DialogContent>
                          {(() => {
                            switch (activeModal) {
                              case "Text Input":
                                return <TextInputModal formik={formik} />;
                              case "Number Input":
                                return (
                                  <NumberInputModal formik={formikNumber} />
                                );
                            }
                          })()}
                          <DialogFooter>
                            <DialogClose className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                              Cancel
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </div>
                    ))}
                  </div>
                </Tab.List>
              </aside>
              <div className="col col-span-2">
                <h3 className="w-full pb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-xl sm:text-2xl">
                  Preview
                </h3>
                <Tab.Panels className="w-full">
                  <div className="h-full w-full gap-4 border rounded-xl px-6 py-4">
                    <Tab.Panel className="flex flex-col px-2 py-4">
                      <TextInputPreview formik={formik} />
                    </Tab.Panel>
                    <Tab.Panel className="flex flex-col px-2 py-4">
                      <NumberInputPreview formik={formikNumber} />
                    </Tab.Panel>
                  </div>
                </Tab.Panels>
              </div>
            </Dialog>
          </Tab.Group>
        </div>
      </section>
    </main>
  );
}
