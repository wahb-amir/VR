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
   
    <section id="why-choose-us" className="py-20 w-full text-zinc-100">
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-white">
            Why Choose Neuro VR?
          </h2>
          <p className="text-lg text-zinc-400 mt-4 max-w-2xl mx-auto">
            See how our platform stacks up against traditional educational tools.
          </p>
        </div>

        <Card className="bg-zinc-900 border-zinc-800 shadow-xl">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-zinc-800">
                  <TableHead className="w-[300px] font-bold text-xl text-zinc-100 pl-6 py-6">
                    Feature
                  </TableHead>
                  <TableHead className="font-bold text-xl text-center text-emerald-400 py-6">
                    Neuro VR
                  </TableHead>
                  <TableHead className="font-bold text-xl text-center text-zinc-400 py-6">
                    Traditional Tools
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row) => (
                  <TableRow
                    key={row.feature}
                  
                    className="hover:bg-zinc-800/50 border-zinc-800 transition-colors duration-200"
                  >
                    <TableCell className="font-medium text-lg pl-6 py-4 text-zinc-300">
                      {row.feature}
                    </TableCell>
                    
                    {/* Neuro VR Column */}
                    <TableCell className="text-center py-4">
                      {typeof row.yourProduct === "boolean" ? (
                        row.yourProduct ? (
                         
                          <CheckCircle2 className="h-7 w-7 text-emerald-500 mx-auto" />
                        ) : (
                          <XCircle className="h-7 w-7 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-emerald-100 font-semibold text-lg">
                          {row.yourProduct}
                        </span>
                      )}
                    </TableCell>

                    <TableCell className="text-center py-4 text-zinc-500">
                      {typeof row.traditionalTools === "boolean" ? (
                        row.traditionalTools ? (
                          <CheckCircle2 className="h-7 w-7 text-emerald-500/50 mx-auto" />
                        ) : (
                          <XCircle className="h-7 w-7 text-red-500/50 mx-auto" />
                        )
                      ) : (
                        <span className="text-zinc-500 text-lg">
                          {row.traditionalTools}
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}