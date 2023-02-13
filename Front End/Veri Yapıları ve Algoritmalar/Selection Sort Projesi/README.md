## SELECTION SORT PROJESİ
----------------------------------------------------------------
**[22,27,16,2,18,6]** -> Insertion Sort
1. [22,27,16,2,18,6] -> 22 sayısı 27'den küçük o yüzden yerinde kaldı.
2. [16,22,27,2,18,6] -> 16 sayısı 22'den küçük o yüzden en başa geldi.
3. [2,16,22,27,18,6] -> 2 sayısı 16'dan küçük o yüzden en başa geldi.
4. [2,16,18,22,27,6] -> 18 sayısı 22'den küçük olduğu için 22'nin önüne geldi.
5. [2,6,16,18,22,27] -> 6 sayısı 16'dan küçük olduğu için 16'nın önüne geldi.

Big-O = O(n^2)

18 sayısı ortada olduğu için Average Case'dir.

----------------------------------------------------------------
**[7,3,5,8,2,9,4,15,6]** -> Selection Sort
1. [2,3,5,8,7,9,4,15,6] -> 2 en küçük sayı olduğu için 7 ile yer değiştirdi ve en başa geldi.
2. [2,3,4,8,7,9,5,15,6] -> 3'e dokunmadık aynı kaldı. 4 sayısı ile 5 sayısı yer değiştirdi. 
3. [2,3,4,5,7,9,8,15,6] -> 5 sayısı ile 8 sayısı yer değiştirdi.
4. [2,3,4,5,6,9,8,15,7] -> 6 sayısı ile 7 sayısı yer değiştirdi.