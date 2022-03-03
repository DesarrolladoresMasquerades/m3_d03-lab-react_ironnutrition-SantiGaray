import { Card, Col, Divider, Button } from "antd";

export default function FoodBox(prop) {
    const deleteF  = prop.deleteF // const {deleteF} = prop
    const name = prop.food.name

  return (
    <Col>
      <Card
        title={prop.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={prop.food.image} height={60} />
        <p>Calories: {prop.food.calories}</p>
        <p>Servings: {prop.food.servings}</p>
        <p>
          <b>Total Calories: {prop.food.calories * prop.food.servings} </b> kcal
        </p>
        <Button onClick={() => deleteF(prop.food)}> Delete </Button>
      </Card>
    </Col>
  );
}
