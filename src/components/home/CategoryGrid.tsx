
import { Link } from 'react-router-dom';
import { categories, Category } from '@/data/products';

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={`/category/${category.id}`}
      className="flex flex-col items-center p-4 rounded-lg bg-card border hover:shadow-md transition-shadow text-center"
    >
      <div className="text-3xl mb-2">{category.icon}</div>
      <span className="text-sm font-medium">{category.name}</span>
    </Link>
  );
}
