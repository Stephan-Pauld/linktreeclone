const Page = require('../models/Page');

const pageResolvers = {
    Query: {
        getPage: async (_, { slug }) => {
            return await Page.findOne({ slug });
        },
        getAllPages: async () => {
            return await Page.find({});
        }
    },
    Mutation: {
        addPage: async (_, { slug, links = [] }) => {
            const newPage = new Page({ slug, links });
            return await newPage.save();
        },
        updatePage: async (_, { id, slug, links }) => {
            const updateData = {};
            if (slug) updateData.slug = slug;
            if (links) updateData.links = links;

            return await Page.findByIdAndUpdate(id, updateData, { new: true });
        },
        deletePage: async (_, { id }) => {
            await Page.findByIdAndRemove(id);
            return "Page deleted successfully";
        }
    }
};

module.exports = pageResolvers;
