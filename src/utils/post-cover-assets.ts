import cover01 from '../assets/post-covers/super-visuals-01.webp';
import cover02 from '../assets/post-covers/super-visuals-02.webp';
import cover03 from '../assets/post-covers/super-visuals-03.webp';
import cover04 from '../assets/post-covers/super-visuals-04.webp';
import cover05 from '../assets/post-covers/super-visuals-05.webp';
import cover06 from '../assets/post-covers/super-visuals-06.webp';
import cover07 from '../assets/post-covers/super-visuals-07.webp';
import cover08 from '../assets/post-covers/super-visuals-08.webp';
import cover09 from '../assets/post-covers/super-visuals-09.webp';
import cover10 from '../assets/post-covers/super-visuals-10.webp';
import { getPostCoverName } from './post-cover';

const covers = {
  'super-visuals-01': cover01,
  'super-visuals-02': cover02,
  'super-visuals-03': cover03,
  'super-visuals-04': cover04,
  'super-visuals-05': cover05,
  'super-visuals-06': cover06,
  'super-visuals-07': cover07,
  'super-visuals-08': cover08,
  'super-visuals-09': cover09,
  'super-visuals-10': cover10,
};

export function getPostCover(postId: string) {
  return covers[getPostCoverName(postId) as keyof typeof covers];
}
