import { ApiProperty } from "@nestjs/swagger";


export class CreateImageDto {

  @ApiProperty({example: 'ed61e4f4-e78a-447a-b78b-315be47e7b30.jpg', description: 'Image name'})
  image: string;

  @ApiProperty({example: 'films', description: 'Main table name'})
  essenceTable: string;

  @ApiProperty({example: 12, description: 'Foreign key'})
  essenceId: number;

}