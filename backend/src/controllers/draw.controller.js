const DrawService = require('./../services/draw.service');

const draw = async (req, res) => {
    try {
        const result = await DrawService.draw();

        if (!result) {
            res.status(406).json({
                message: 'The people number is insufficient. Is needed an even number of people or 4 people or higher to draw'
            })
        }

        return res.status(202).json();
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    draw
}