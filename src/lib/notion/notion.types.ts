import type { NOTION_BLOCK_TYPES, NOTION_COLORS } from './notion.constants';

export type BlockType = (typeof NOTION_BLOCK_TYPES)[number];
export type Block = {
  id: string;
  type: BlockType;
  [key: string]: any;
};

export type NotionColorFg = (typeof NOTION_COLORS)[number];
export type NotionColorBg = `${NotionColorFg}_background`;
export type NotionColor = NotionColorFg | NotionColorBg;

export type BlockRichText = {
  text: {
    content: string;
    link: null | { url: string };
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: NotionColor;
  };
};

export type BlockNumberedListItem = {
  numbered_list_item: {
    text: Array<BlockRichText>;
  };
  siblings: Array<{
    numbered_list_item: {
      text: Array<BlockRichText>;
    };
  }>;
};

export type BlockPeople = {
  name: string;
  avatar_url: string;
};

export type BlockBulletedListItem = {
  bulleted_list_item: {
    text: Array<BlockRichText>;
  };
  siblings: Array<{
    bulleted_list_item: {
      text: Array<BlockRichText>;
    };
  }>;
};

export type BlockHeading = {
  rich_text: Array<BlockRichText>;
};
export type BlockHeadingType = 'heading_1' | 'heading_2' | 'heading_3';

export type BlockParagraph = {
  rich_text: Array<BlockRichText>;
};

export type BlockTag = {
  id: string;
  name: string;
  color: string;
};

export type BlockTitle = {
  text: {
    content: string;
  };
};

export type BlockToggleListItem = {
  toggle: {
    text: Array<BlockRichText>;
  };
  siblings: Array<{
    toggle: {
      text: Array<BlockRichText>;
    };
  }>;
};
