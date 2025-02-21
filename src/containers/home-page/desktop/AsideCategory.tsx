import { categoryData } from "@/services/fixed-data/fixedData";
import CategoryLink from "@/components/links/CategoryLink";

function Divider() {
  return <div className="w-1/4 h-[1px] bg-primary mt-5 mb-3"></div>;
}

export default function AsideCategory() {
  return (
    <aside className="mt-5 w-full bg-secondary rounded-lg p-5">
      <h3>Category</h3>
      <Divider />
      <div>
        {categoryData.map((item) => (
          <CategoryLink
            key={item.id}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </aside>
  );
}
