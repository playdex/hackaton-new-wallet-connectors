export const getShortStringView = (str: string, prefixStr?: string): string => {
  const fullAvailableRoninLength = 46;

  const roninAddressOnly = str.slice(
    str.length === fullAvailableRoninLength ? 6 : 0,
    str.length,
  );

  const prefixPartOfResultRonin = roninAddressOnly.slice(0, prefixStr ? 2 : 5);
  const posfixPartOfResultRonin = roninAddressOnly.slice(
    roninAddressOnly.length - 4,
  );

  return `${
    prefixStr ?? ''
  }${prefixPartOfResultRonin}...${posfixPartOfResultRonin}`;
}