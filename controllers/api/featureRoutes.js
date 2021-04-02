const router = require('express').Router();
const { Feature, Character, FeatureCharacter } = require('../../models');
router.get('/', async (req, res) => {
    try {
        const featureGet = await Feature.findAll({
            attributes: ['id', 'feature'],
            include: [{ model: Character }]
        })
        res.status(200).json(featureGet)
    } catch (err) {
        res.status(500).json(err)
    }
});
router.get('/:id', async (req, res) => {
    try {
        const featureSingle = await Feature.findbyPk(req.params.id, {
            include: [{ model: Feature }]
        })
        if (!productVal) {
            res.status(404).json
                ({ message: 'Sorry, no feature found matching our records, try again' });
            return;
        }
        res.status(200).json(featureSingle)
    } catch (err) {
        res.status(500).json(err)
    }
});
router.post('/', async (req, res) => {
    try {
        const featurePost = await Feature.create({
            feature: req.body.feature
        })
        res.status(200).json(featurePost)
    } catch (err) {
        res.status(500).json(err)
    }
});
router.put('/:id', (req, res) => {
    Feature.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then((feature) => {
            res.json(feature)
            return Feature.findAll({ where: { feature: req.params.id } })
        })
        .then((feature) => {
            const featureCharacterIds = featureCharacter.map(({ character_id }) => character_id);
            const newFeature = req.body.featureIds
                .filter((feature_id) => !featureCharacterIds.includes(feature_id))
                .map((feature_id) => {
                    return {
                        feature_id: req.params.id,
                        character_id,
                    };
                });
            const featureCharacterToRemove = featureCharacter
                .filter(({ feature_id }) => !req.body.featureIds.includes(feature_id))
                .map(({ id }) => id);
            return Promise.all([
                featureCharacter.destroy({ where: { id: featureCharacterToRemove } }),
                featureCharacter.bulkCreate(newFeature),
            ]);
        })
        .then((updatedFeatureCharacter) => res.json(updatedFeatureCharacter))
        .catch((err) => {
            // console.log(err);
            res.status(400).json(err);
        })
});

router.delete('/:id', async (req, res) => {
    try {
        const destroyFeature = await Feature.destroy(
            {
                where: {
                    id: req.params.id
                }
            }).then(destroyFeature => (destroyFeature) ? res.status(200).json : res.status(404).json
                ({ message: "Cant find what to destroy try again" }));
    } catch (err) {
        res.status(500).json(err)
    }
});
module.exports = router;