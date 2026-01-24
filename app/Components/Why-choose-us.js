import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comparisonData = [
  {
    feature: "Setup Time",
    yourProduct: "5 minutes",
    traditionalTools: "Hours",
  },
  {
    feature: "VR Ready",
    yourProduct: true,
    traditionalTools: false,
  },
  {
    feature: "No Code",
    yourProduct: true,
    traditionalTools: false,
  },
  {
    feature: "Immersive Experience",
    yourProduct: "Fully Immersive",
    traditionalTools: "Screen-based",
  },
  {
    feature: "Hardware Cost",
    yourProduct: "Affordable Headsets",
    traditionalTools: "Expensive Labs",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 w-full text-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold font-headline text-white">
            Why Choose Neuro VR?
          </h2>
          <p className="text-base md:text-lg text-gray-400 mt-3 max-w-2xl mx-auto">
            See how our platform stacks up against traditional educational tools.
          </p>
        </div>

        <Card className="bg-gray-900 border-gray-800 shadow-xl">
          <CardContent className="p-4 md:p-0">
            <div className="hidden md:block overflow-x-auto">
              <Table className="min-w-[720px]">
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-gray-800">
                    <TableHead className="w-[300px] font-bold text-xl text-gray-100 pl-6 py-6">
                      Feature
                    </TableHead>
                    <TableHead className="font-bold text-xl text-center text-emerald-400 py-6">
                      Neuro VR
                    </TableHead>
                    <TableHead className="font-bold text-xl text-center text-gray-400 py-6">
                      Traditional Tools
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {comparisonData.map((row) => (
                    <TableRow
                      key={row.feature}
                      className="hover:bg-gray-800/50 border-gray-800 transition-colors duration-200"
                    >
                      <TableCell className="font-medium text-lg pl-6 py-4 text-gray-300">
                        {row.feature}
                      </TableCell>

                      <TableCell className="text-center py-4">
                        {typeof row.yourProduct === "boolean" ? (
                          row.yourProduct ? (
                            <CheckCircle2
                              className="h-7 w-7 text-emerald-500 mx-auto"
                              aria-hidden
                            />
                          ) : (
                            <XCircle
                              className="h-7 w-7 text-red-500 mx-auto"
                              aria-hidden
                            />
                          )
                        ) : (
                          <span className="text-emerald-100 font-semibold text-lg">
                            {row.yourProduct}
                          </span>
                        )}
                      </TableCell>

                      <TableCell className="text-center py-4 text-gray-500">
                        {typeof row.traditionalTools === "boolean" ? (
                          row.traditionalTools ? (
                            <CheckCircle2
                              className="h-7 w-7 text-emerald-500/50 mx-auto"
                              aria-hidden
                            />
                          ) : (
                            <XCircle
                              className="h-7 w-7 text-red-500/50 mx-auto"
                              aria-hidden
                            />
                          )
                        ) : (
                          <span className="text-gray-500 text-lg">
                            {row.traditionalTools}
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="md:hidden space-y-3">
              {comparisonData.map((row) => (
                <div
                  key={row.feature}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-gray-300 font-medium text-base">
                        {row.feature}
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        {/* Neuro VR */}
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0">
                            {typeof row.yourProduct === "boolean" ? (
                              row.yourProduct ? (
                                <CheckCircle2
                                  className="h-6 w-6 text-emerald-500"
                                  aria-hidden
                                />
                              ) : (
                                <XCircle
                                  className="h-6 w-6 text-red-500"
                                  aria-hidden
                                />
                              )
                            ) : (
                              <span className="inline-block h-6" />
                            )}
                          </div>
                          <div>
                            <div className="text-xs text-emerald-400 font-semibold">
                              Neuro VR
                            </div>
                            <div className="text-sm text-emerald-100">
                              {typeof row.yourProduct === "boolean"
                                ? row.yourProduct
                                  ? "Yes"
                                  : "No"
                                : row.yourProduct}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0">
                            {typeof row.traditionalTools === "boolean" ? (
                              row.traditionalTools ? (
                                <CheckCircle2
                                  className="h-6 w-6 text-emerald-500/60"
                                  aria-hidden
                                />
                              ) : (
                                <XCircle
                                  className="h-6 w-6 text-red-500/60"
                                  aria-hidden
                                />
                              )
                            ) : (
                              <span className="inline-block h-6" />
                            )}
                          </div>
                          <div>
                            <div className="text-xs text-gray-400 font-semibold">
                              Traditional Tools
                            </div>
                            <div className="text-sm text-gray-300">
                              {typeof row.traditionalTools === "boolean"
                                ? row.traditionalTools
                                  ? "Yes"
                                  : "No"
                                : row.traditionalTools}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
