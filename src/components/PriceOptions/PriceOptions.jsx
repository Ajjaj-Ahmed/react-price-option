import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const gymPrice =[
        {
          "id": 1,
          "membershipType": "Basic",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "One free personal training session"
          ]
        },
        {
          "id": 2,
          "membershipType": "Standard",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Group fitness classes",
            "Two free personal training sessions",
            "Free WiFi"
          ]
        },
        {
          "id": 3,
          "membershipType": "Premium",
          "price": 69.99,
          "features": [
            "Access to gym equipment",
            "Locker room and sauna access",
            "Unlimited group fitness classes",
            "Monthly personal training session",
            "Free gym apparel",
            "Free WiFi"
          ]
        },
        {
          "id": 4,
          "membershipType": "Elite",
          "price": 99.99,
          "features": [
            "Access to all facilities",
            "Locker room, sauna, and steam room access",
            "Unlimited group fitness and yoga classes",
            "Bi-weekly personal training sessions",
            "Exclusive gym apparel",
            "Priority support",
            "Free WiFi and refreshments"
          ]
        },
        {
          "id": 5,
          "membershipType": "VIP",
          "price": 149.99,
          "features": [
            "24/7 access to all facilities",
            "Locker room, sauna, steam room",
            "Unlimited access to all classes and trainers",
            "Weekly personal training sessions",
            "Custom meal plans",
            "Priority support and concierge services",
            "Complimentary gym merchandise",
            "Free WiFi, refreshments, and parking"
          ]
        }
      ]
      
    return (
        <div>
          <h2 className="text-7xl font-bold text-center">Best Gym in minimum cost</h2>
            <div className="grid grid-cols-3 gap-4 text-white">
            {
                gymPrice.map(option=>
                <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;