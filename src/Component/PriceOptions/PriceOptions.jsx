import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: ["Access to gym facilities", "Group fitness classes"],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49.99,
      features: [
        "Access to gym facilities",
        "Group fitness classes",
        "Personal training consultation",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 79.99,
      features: [
        "Access to gym facilities",
        "Group fitness classes",
        "Personal training sessions",
        "Access to fitness app",
      ],
    },
    {
      id: 4,
      name: "Elite Membership",
      price: 99.99,
      features: [
        "Access to gym facilities",
        "Unlimited group fitness classes",
        "Unlimited personal training sessions",
        "Access to fitness app",
        "Priority booking for classes and equipment",
        "Spa access",
      ],
    },
    {
      id: 5,
      name: "Family Membership",
      price: 149.99,
      features: [
        "Access to gym facilities for up to 4 family members",
        "Group fitness classes for all family members",
        "Personal training consultation for 2 family members",
      ],
    },
    {
      id: 6,
      name: "Student Membership",
      price: 19.99,
      features: ["Access to gym facilities", "Group fitness classes"],
      requirements: ["Valid student ID"],
    },
    {
      id: 7,
      name: "Senior Membership",
      price: 24.99,
      features: ["Access to gym facilities", "Gentle fitness classes"],
      requirements: ["Age 65+"],
    },
    {
      id: 8,
      name: "Corporate Membership",
      price: 59.99,
      features: [
        "Access to gym facilities",
        "Group fitness classes",
        "Personal training consultation",
      ],
      requirements: ["Company ID"],
    },
    {
      id: 9,
      name: "Night Owl Membership",
      price: 39.99,
      features: ["Access to gym facilities from 8 PM to 12 AM"],
    },
    {
      id: 10,
      name: "Weekend Warrior Membership",
      price: 29.99,
      features: ["Access to gym facilities on weekends only"],
    },
  ];
  return (
    <div className="container px-4 py-4 m-12 overflow-hidden ">
      <h1 className="text-5xl">Best prices in the town </h1>
      <div className="flex-grow grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
