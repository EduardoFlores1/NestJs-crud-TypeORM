import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private readonly carRepository: Repository<Cat>
  ) {}

  async create(createCatDto: CreateCatDto) {
    return await this.carRepository.save(createCatDto);
  }

  async findAll() {
    return await this.carRepository.find();
  }

  async findOne(id: number) {
    return await this.carRepository.findOneBy({id});
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return await this.carRepository.update(id, updateCatDto);
  }

  async remove(id: number) {
    return await this.carRepository.softDelete({id});
  }
}
