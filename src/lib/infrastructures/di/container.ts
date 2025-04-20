import { Container } from "inversify";
import type CharityRepository from "$lib/domains/repositories/charity.repository";
import CharityRepositoryImpl from "../repositories/charity.repository.impl";
import TYPES from "./types";
import CharityService from "$lib/applications/charity.service";

const container: Container = new Container();

container
	.bind<CharityRepository>(TYPES.CharityRepository)
	.to(CharityRepositoryImpl)
	.inSingletonScope();

container.bind(CharityService).toSelf().inSingletonScope();

export default container;
