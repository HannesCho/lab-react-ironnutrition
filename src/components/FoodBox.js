import React from 'react'
import { v4 as uuid } from 'uuid';
import { Card, Row, Col, Button } from "antd";

export default function FoodBox(props) {
    const foodList = props.foods.filter(food => food.name.toLowerCase().includes(props.query.toLowerCase()))
    .map(food => {
        return (
                <Col span={8} key={uuid()}>
                    <Card
                        title={food.name}
                        style={{ width: 230, height: 300, margin: 10 }}
                    >
                        <img src={food.image} height={60} alt={food.name} />
                        <p>Calories: {food.calories}</p>
                        <p>Servings: {food.servings}</p>
                        <p>
                        <b>Total Calories: {food.calories * food.servings} </b> kcal
                        </p>
                        <Button type="primary" onClick={() => { props.deleteFoodProp(food.name) }}> Delete </Button>
                    </Card>
                </Col>
        )
    })
    return (
        <div className="cardsContainer">
            {foodList}
        </div>
    )
}
