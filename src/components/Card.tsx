import { Spacer, Text, Card, CardContent } from "vcc-ui";

import { useCars } from "../hooks/useCars";

interface CardProps {
  id: string
  modelName: string
  bodyType: string
  modelType: string
  imageUrl: string
}

export default function CarCard({id, modelType, modelName, bodyType, imageUrl}: CardProps) {
  return (
    <Card href={`/learn/${id}`}>
      <CardContent>
        <Text subStyle="emphasis">{modelType}</Text>
        <Text variant="ootah">{modelName}</Text>
        <Spacer />
        <Text>This is a is a link that will take you to volvocars.com</Text>
      </CardContent>
    </Card>
  )
}