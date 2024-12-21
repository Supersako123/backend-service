
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


type TRelationships = {
  group: {
    id: string;
    type: string;
  };
}

type TDog = {
  id: string;
  type: string;
  attributes: {
    name: string;
    description: string;
    life: { max: number; min: number };
    male_weight: { max: number; min: number };
    female_weight: { max: number; min: number };
    hypoallergenic: boolean;
  };
  relationship: TRelationships;
}


fetch("https://dogapi.dog/api/v2/breeds")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return (response.json());
  })
  .then(async data => {
    const dogs = data.data.map((dog: TDog) => ({
      id: dog.id,
      name: dog.attributes.name,
      description: dog.attributes.description,
      lifeMin: dog.attributes.life.min,
      lifeMax: dog.attributes.life.max,
      weightMaleMin: dog.attributes.male_weight.min,
      weightMaleMax: dog.attributes.male_weight.max,
      weightFemaleMin: dog.attributes.female_weight.min,
      weightFemaleMax: dog.attributes.female_weight.max,
      hypoallergenic: dog.attributes.hypoallergenic,
    }
    ))

    const createMany = await prisma.dog.createMany({
      data: dogs,
    })

  }
  )
  .catch(error => console.log(error));

