import cards from "@/app/data/Cards";
import Card from "@/components/Card";

export default function Products() {
    return( 
        <div className="grid">
            {cards.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
        </div>
    );
}