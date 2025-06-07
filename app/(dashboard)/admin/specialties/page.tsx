import LimitSelect from "@/components/limit-select";
import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SpecialtiesList from "./components/specialties-list";

export default function AdminSpecialtiesPage() {
  return (
    <div className="border p-6 bg-card rounded-md space-y-4">
      <h1 className="text-2xl font-bold   bg-card/50 text-default-600">
        Specialties List
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <SearchInput searchParamKey="name" />
        <LimitSelect />
      </div>
      <ScrollArea className="pb-8  lg:pb-0">
        <SpecialtiesList />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Pagination totalPages={10} currentPage={1} />
    </div>
  );
}
