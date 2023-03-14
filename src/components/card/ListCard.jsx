import React from "react";
import Card from "./Card";

const data = [
  { name: "san pham 1", sevice: "Basic", id: 1 },
  { name: "san pham 2", sevice: "Vip", id: 2 },
  { name: "san pham 3", sevice: "Pro", id: 3 }
];

const ListCard = () => {
  return (
    <div className="list__card">
    {data.map(item=>{
      console.log(item)
      return (
        <React.Fragment key={item.id}>
          <Card item={item} />
        </React.Fragment>
      )
    })}
    </div>
  );
};

export default ListCard;
