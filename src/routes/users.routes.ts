import express from 'express';
import UsersController from '../controllers/users.controller';
import { UserMockRepository } from '../repository/users-mock-repository';

const repository = new UserMockRepository();
const controller = new UsersController(repository);

const router = express.Router();

router.post('', (req, res) => {
	try {
		return res.json(controller.addItem(req.body));
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('', (_, res) => {
	return res.json(controller.getAllItems());
});

router.patch('/:id', (req, res) => {
	try {
		return res.json(controller.updateItem(req.params.id, req.body));
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete('/:id', (req, res) => {
	try {
		return res.json(controller.deleteItem(req.params.id));
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/:id', (req, res) => {
	try {
		return res.json(controller.getItemById(req.params.id));
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/find/:name', (req, res) => {
	try {
		return res.json(controller.findUserByFirstName(req.params.name));
	} catch (error) {
		res.status(500).json(error);
	}
});

export default router;
